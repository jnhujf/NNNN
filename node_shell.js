const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'9cb23a59-c3d5-4413-a78a-c1a08b1f1fe0'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
