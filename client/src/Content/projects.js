export default function firstContent() {
	let Content = [
		{
			id: 1,
			header: 'Project 1',
			body:
				'You HTML & CSS Project' +
				'\n' +
				'Build the Google.com homepage' +
				'\n' +
				'(the simple one with just a search box).' +
				'\n' +
				'Start off by making the files on your computer and opening them in your browser.' +
				'\n' +
				'\n' +
				'Tips:' +
				"DON'T BE A PERFECTIONIST! You're just trying to make it look like google.com, not actually function like it and it doesn't have to be spaced exactly the same way to the pixel." +
				' Any dropdown menus or form submissions or hover-highlighting should be ignored.' +
				'\n' +
				"USE GOOGLE! You'll probably run into roadblocks where you can't figure out how to do something so do what all good devs do... Google it!" +
				'\n' +
				"If you're frustrated with trying to get buttons or inputs to style the way you want (for instance, they seem to just not respond to any styles), look into the css property -webkit-appearance: none; or -moz-appearance if you're using Firefox." +
				'\n' +
				'Start with just putting the main elements on the page (the logo image and search form), then get them placed horizontally. You can either download the Google logo or link directly to its URL on the web in your <img> tag.' +
				'\n' +
				"Next do the navbar across the top, first building the content and then trying to position it. Check out how to build a horizontal CSS navbar if you're lost." +
				'\n' +
				'Finally, put in the footer, which should be very similar to the top navbar.' +
				'\n' +
				"In general, do as much on your own as you can before relying on the developer tools (or viewing the page's source code) to help you along." +
				'\n' +
				'Once you have made your site, follow these steps to create a repo on GitHub.' +
				'\n' +
				'On GitHub, upload your files by clicking the upload files button and selecting the html and css files you have been editing.' +
				'\n' +
				'Viewing your project on the web - optional!' +
				'\n' +
				'If you want to show your work (the project) to others, you will need to publish your site so that others can access it from the web, rather than just on your local machine. The good news is that if you have your project on GitHub (as described above) doing this is incredibly simple.' +
				'\n' +
				'Github allows you to publish web projects directly from a GitHub repository. Doing this will allow you to access your project from your-gh-username.github.io/your-github-repo-name' +
				'\n' +
				'There are a couple of ways to go about doing this, but the simplest is this:' +
				'\n' +
				'make sure that the main html file of your project is called index.html. If it is not, you will need to rename it.' +
				'\n' +
				'go to your GitHub repo on the web and click the Settings button' +
				'\n' +
				'scroll down until you find the GitHub Pages section' +
				'\n' +
				'change the Source from none to master branch and click Save.' +
				'\n' +
				"it may take a few minutes (the GitHub website says up to 10) but your project should be accessible over the web from your-gh-username.'+'\n'+ github.io/your-github-repo-name (substituting your own details in the link)",
		},
		{
			id: 2,
			header: 'Project 2',
			body:
				'JavaScript Project' +
				'\n' +
				'Etch a Sketch sunrise artJavaScript Project' +
				'\n' +
				'\n' +
				'Introduction' +
				'\n' +
				"In this project you'll be creating a pretty neat toy for your portfolio to flex your DOM manipulation skills. You're going to build a browser version of something between a sketchpad and an Etch-A-Sketch." +
				'\n' +
				"This project should not be easy for you. You'll probably have to Google frequently to get the right JavaScript methods and CSS to use - in fact, that's the point! You can build this using the tools that you have already learned and there are plenty of resources on the net for learning stuff that we haven't covered yet if you decide you need it. We'll walk you through the basic steps, but it will be up to you to actually implement them." +
				'\n' +
				'If you get totally stuck drop by the discord server, someone there will be able to point you in the right direction.' +
				'\n' +
				'Assignment' +
				'\n' +
				'Start off by making the files on your computer and opening them in your browser.' +
				'\n' +
				'Create a webpage with a 16x16 grid of square divs' +
				'\n' +
				"Create the divs using JavaScript... don't try making them by hand with copy and pasting in your html file!" +
				'\n' +
				'Best to put your grid squares inside another "container" div (that one can go directly in your html)' +
				'\n' +
				'There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them:' +
				'\n' +
				'float/clear' +
				'\n' +
				'inline-block' +
				'\n' +
				'flexbox' +
				'\n' +
				'CSS Grid' +
				'\n' +
				'Be careful with borders and margins, they can adjust the size of the squares!' +
				'\n' +
				'"OMG, Why isn\'t my grid being created???' +
				"Open your browser's developer tools" +
				'\n' +
				'Check if there are any errors in the JavaScript console' +
				'Check your " elements" pane to see if the elements have actually shown up but are somehow hidden.' +
				'\n' +
				"Go willy-nilly and add console.log statements in your JavaScript to see if it's actually being loaded." +
				'\n' +
				'Set up a "hover" effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.' +
				'\n' +
				'Hint: "hovering" is what happens when your mouse enters a div and ends when your mouse leaves it.. you can set up event listeners for either of those events as a starting point.' +
				'\n' +
				'There are multiple ways to change the color of the divs, including:' +
				'\n' +
				'adding a new class to the div' +
				'\n' +
				"changing the div's background color using JavaScript." +
				'\n' +
				"Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you've got a new sketch pad." +
				'\n' +
				'Research button tags in HTML and how you can make a JavaScript function run when one is clicked.' +
				'\n' +
				'Also check out prompts' +
				'\n' +
				'You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used' +
				'\n' +
				'(Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.' +
				'\n' +
				'Follow these steps to create a repo on GitHub.' +
				'\n' +
				'On GitHub, make new empty files and copy and paste your code into them, making sure you save them by clicking the commit changes button.',
		},
		{
			id: 3,
			header: 'Upload Projects',
			body: '',
		},
	];

	return Content;
}
