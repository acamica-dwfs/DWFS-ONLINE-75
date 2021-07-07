/**
 *  permite almacenar  un token  com variable de postman
 */

if (responseCode.code === 200) {
    try {
        var authorization = JSON.parse(responseBody).access_token;
        postman.setEnvironmentVariable("token_acamica", authorization);
    }
    catch (e) {
        console.log(e);
        throw false;
    }
}

