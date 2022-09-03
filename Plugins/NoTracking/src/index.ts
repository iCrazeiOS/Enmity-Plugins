import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { Messages, React } from "enmity/metro/common";
import { create } from "enmity/patcher";
import manifest from "../manifest.json";

const Patcher = create("no-tracking");

const NoTracking: Plugin = {
	...manifest,
	
	onStart() {
		Patcher.before(Messages, "sendMessage", (a0, a1, a2) => {
			let message = a1[1]["content"];

			// regex stolen from stackoverflow
			const urlRegex = /(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g;

			message.match(urlRegex)?.forEach(url => {
				if (url.includes("twitter.com/")) {
					let newUrl = url.split("t=")[0].split("s=")[0];
					if (newUrl.endsWith("?")) newUrl = newUrl.slice(0, -1);
					message = message.replace(url, newUrl);
				} else if (url.includes("reddit.com/")) {
					// do some stuff
					// (?context is kept because that actually changes how replies are displayed)
					let newUrl = url.replace(/utm_medium(=[^&]*)?|^utm_medium(=[^&]*)?&?/g, "").replace(/utm_source(=[^&]*)?|^utm_source(=[^&]*)?&?/g, "");
					newUrl = newUrl.replace("&&", "");
					newUrl = newUrl.replace("?&", "?");
					if (newUrl.endsWith("&")) newUrl = newUrl.slice(0, -1);
					message = message.replace(url, newUrl);
				}
			});

			if (message.endsWith("?")) message = message.slice(0, -1);

			a1[1]["content"] = message;
		});
	},

	onStop() {
		Patcher.unpatchAll();
	}
};

registerPlugin(NoTracking);