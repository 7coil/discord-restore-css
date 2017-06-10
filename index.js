let discordelements = {};

//Get the largest element that hasn't been fucked up yet
discordelements["flex-vertical channels-wrap"] = document.getElementsByClassName("flex-vertical channels-wrap")[0]

//Get the channels column
discordelements["flex-vertical flex-spacer guild-channels-wrapper"] = discordelements["flex-vertical channels-wrap"].childNodes[0]
discordelements["guild-header"] = discordelements["flex-vertical flex-spacer guild-channels-wrapper"].childNodes[0]
discordelements["channel-list-top"] = discordelements["flex-vertical flex-spacer guild-channels-wrapper"].childNodes[1]
discordelements["scroller-wrap fade dark"] = discordelements["flex-vertical flex-spacer guild-channels-wrapper"].childNodes[2]
discordelements["scroller guild-channels"] = discordelements["scroller-wrap fade dark"].childNodes[0]

//Fix each channel box
discordelements["channel channel-text"] = Array.from(discordelements["scroller guild-channels"].childNodes).filter((element)=>element.hasAttribute("draggable"))

//Get the account box
discordelements["account"] = discordelements["flex-vertical channels-wrap"].childNodes[2]
discordelements["avatar-small stop-animation"] = discordelements["account"].childNodes[0]
discordelements["account-details"] = discordelements["account"].childNodes[1]
//discordelements["btn-group"] = discordelements["account"].childNodes[2]

Object.keys(discordelements).forEach((key) => {
	if (Array.isArray(discordelements[key])) {
		discordelements[key].forEach((element)=>{
			element.className = key;
		});
	} else if(typeof discordelements[key] == "object") {
		discordelements[key].className = key;
	}
})
