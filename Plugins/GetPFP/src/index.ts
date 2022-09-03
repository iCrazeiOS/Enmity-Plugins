import { sendReply } from "enmity/api/clyde";
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType, registerCommands } from 'enmity/api/commands'
import { getByProps } from "enmity/metro";
const { getUser } = getByProps("getUser");
const { fetchCurrentUser } = getByProps("fetchCurrentUser");
import manifest from "../manifest.json";

function get_avatar_url(user: string) {
	let response = ["Error"];
	let info = getUser(user);
	response = [`https://cdn.discordapp.com/avatars/${user}/${info.avatar}.png?size=4096`, info.username];
	return response;
}

const pfp_command: Command = {
	id: "pfp-command",
	name: "pfp",
	displayName: "pfp",
  	description: "Get a user's profile picture",
  	displayDescription: "Get a user's profile picture",
  	type: ApplicationCommandType.Chat,
  	inputType: ApplicationCommandInputType.BuiltInText,
  	options: [{
	  	name: "user",
	  	displayName: "user",
	  	description: "User",
	  	displayDescription: "User",
	  	type: ApplicationCommandOptionType.User,
	  	required: false,
	}],
	
	execute: async function (args, context) {
		let id = await fetchCurrentUser().then(res => res.id);
		const response = get_avatar_url(args.length == 0 ? id : args[0].value);

		const embed = {
		  	type: 'rich', title: "Here's my profile picture...",
		  	image: { proxy_url: response[0], url: response[0], width: 4096, height: 4096 },
		  	footer: { text: "Fetched with GetPFP | By iCraze" },
			color: '0xff0000'
		}

		sendReply(context!.channel.id, {embeds: [embed], components: []}, response[1], response[0]);
  	}
}

const GetPFP: Plugin = {
	...manifest,

  	onStart() {
		registerCommands("pfp", [pfp_command]);
  	},

  	onStop() {
		this.comamands = [];
	}
}

registerPlugin(GetPFP);
