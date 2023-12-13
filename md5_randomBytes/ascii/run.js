console.log(
	require("crypto")
	.createHash("md5")
	.update(require("crypto").randomBytes(127))
	.digest("ascii")
)