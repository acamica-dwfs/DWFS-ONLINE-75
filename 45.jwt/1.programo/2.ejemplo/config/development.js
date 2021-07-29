const config = {
    Port: 5500,
    ApiBaseUrl: "https://ambienteprueba.puntos.com",
    JwtSecretKey:
        "C468BD253A764AA29AB8D4EB06FFD4FFE2AAA5F98016032F9A237FEC6A757112",
    JwtExpiresToken: 60, // seconds
    LoginInfo: {
        User: "acamica",
        Password: "acamica123",
    },
    DataBaseConfig: {
        CnxString: "mongodb+srv://wsduque:TGdNML3hD1qKbMtM@clustertest-6s8tr.mongodb.net/test?retryWrites=true&w=majority",
        User: "wsduque",
        Pass: "TGdNML3hD1qKbMtM"
    }

};
// https://www.grc.com/passwords.htm
module.exports = { config };
