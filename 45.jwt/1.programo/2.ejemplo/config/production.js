const config = {
    Port: 5600,
    ApiBaseUrl: "https://produccion.puntos.com",
    JwtSecretKey:
        "856ED746F97360B36E4BA820EB5A848206D5B40EA5D2D5BE0A5392E8BBD2A16C",
    JwtExpiresToken: 20, // seconds
    LoginInfo: {
        User: "acamica",
        Password: "acamica123",
    },
    DataBaseConfig: {
        CnxString: "mongodb+srv://wsduque:<password>@clustertest-6s8tr.mongodb.net/test?retryWrites=true&w=majority",
        User: "wsduque",
        Pass: "TGdNML3hD1qKbMtM"
    }

};
// https://www.grc.com/passwords.htm
module.exports = { config };
