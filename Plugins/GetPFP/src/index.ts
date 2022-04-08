import { Command, EnmitySectionID, ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType } from "enmity-api/commands";
import { Plugin, registerPlugin } from "enmity-api/plugins";
import { sendReply } from "enmity-api/clyde";
import { getUser } from "enmity-api/users";

async function get_avatar_url(user: string) {
  var response = ["Error"];
  
  await getUser(user).then(res => {
    response = [`https://cdn.discordapp.com/avatars/${user}/${res.avatar}.png?size=4096`, res.username];
  });

  return response;
}

const GetPFP: Plugin = {
  name: "Get PFP",
  commands: [],

  onStart() {
    const pfp_command: Command = {
      id: "pfp-command",
      applicationId: EnmitySectionID,

      name: "pfp",
      displayName: "pfp",

      description: "Get a user's profile picture",
      displayDescription: "Get a user's profile picture",
      
      type: ApplicationCommandType.Chat,
      inputType: ApplicationCommandInputType.BuiltInText,
      
      options: [
        {
          name: "user",
          displayName: "user",

          description: "User",
          displayDescription: "User",
          
          type: ApplicationCommandOptionType.User,
          required: true
        }
      ],
    
      execute: async function (args, message) {
        const response = await get_avatar_url(args[0].value);

        const embed = {
          type: 'rich',
          title: "Here's my profile picture...",
          image: {
            proxy_url: response[0],
            url: response[0],
            width: 4096,
            height: 4096
          },
          footer: {
            text: "Fetched by GetPFP | By iCraze"
          },
          color: '0xff0000'
        }

        sendReply(message.channel.id, {embeds: [embed], components: []}, response[1], response[0]);
      }
    }

    this.commands.push(pfp_command);
  },

  onStop() {
    this.comamands = [];
  }
}

registerPlugin(GetPFP);
