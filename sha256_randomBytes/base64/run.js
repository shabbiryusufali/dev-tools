console.log(
	require("crypto")
	.createHash("sha256")
	.update(require("crypto").randomBytes(127))
	.digest("base64")
)