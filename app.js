const argv = require("yargs/yargs")(process.argv.slice(2)).argv;
function characterGreeting(character, greeting) {
	if (character === "cat") {
		const cat = `
 /\\_/\\
( o.o ) "${greeting}"
 \> ^ <`;
		console.log(cat);
	} else if (character === "bear") {
		const bear = `
 __         __
/  \\.-"""-./  \\
\\   -    -    /
 |   o    o  |
 \\  .-'''-.  /
  '-\\__Y__/-' "${greeting}"
     \`---\``;

		console.log(bear);
	} else if (character === "monkey") {
		const monkey = `
  /~\\
 C oo
 _( ^) "${greeting}"
/   ~\\
Keely`;
		console.log(monkey);
	}
}
console.log("character:", argv.character);
console.log("greeting:", argv.greeting);
characterGreeting(argv.character, argv.greeting);
