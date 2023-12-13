console.log(
	require("crypto")
	.createHash("sha512")
	.update(require("crypto").randomBytes(127))
	.digest("base64")
)