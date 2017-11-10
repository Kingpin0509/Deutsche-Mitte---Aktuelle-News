const functions = require("firebase-functions");
const admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "ionicframeworkapp-bc20a",
    clientEmail:
      "firebase-adminsdk-uj9wg@ionicframeworkapp-bc20a.iam.gserviceaccount.com",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCGXOPGDIUtlJ78\n9UJxcJB2kSPytFNsFcYqByslhXH3UWsqtIILR9WKfB2KYT5goC+buxy5kbYifHLl\nZcScCiTx/iuj9NLJICXQxj7tQXHONCn+1VLsskHjo1dpBaRRykC1U5GvrDEw1ZXx\neZPP2K+tAG4m9uUB7yxwSYmAOrLd0Zcz/umrPQBAyCE7mX/5Tb3qUV8BS3diHA6V\n+48euLqlGl+X79po44VG0REDSX/e5evVj/9RHifXdN8G4LDWBS5TUsTMB6MCBO0I\nYjMZTt+XBw8mng6Ph4bWh3lPvifg2qhUL7zaBtMJqSSWfBltiV5iM9MdUwYwOtO4\n/OM1yhIPAgMBAAECggEABXx9gHS6a2YKJ+IL2H30KCM9CIf8cAljkgvA40NTp/mX\nGqNMPBGu0nzG6AOYfHGOABnfzmP4v+e8+UjygjyXzZnHRmaUxMmfQasWnrFxaC4R\nGOq0/B07O4RL6Wnlj8FmawECjd3GFGxkNvvz4STD55iA5u5l43JUqjEWgDnlW9FH\n6aCTEzQcdGQ68MF5wRWS5MRwtNMEbonRyfLShYWVZ7+fbNHQ7ai7+HHowYSp3NKp\nJyckMQ5OMhDUuRz0Yi0YgWIF1t28/20k4aP9wY29TPmlk50jAB45QfApjE20TdLL\n3HibhQu/T5a5YKs+BoEbd3v8ksCGH8bWvZD6C15qIQKBgQC7tTn50Vur1PYWQJza\nKm/AdVQQKAOsq803hbW7L0gNQPvm9gAqRCyPvf5L8AzughKy195Q2JokE9dn0m+d\nm6J0TIboRMzqO1hPshH8ZMQHC/TsOOJOgVcTgweAqXD0jz0qoy0tHudCQSzN2eGc\neTZr2X+9uUkfVKwgS3awgHRcswKBgQC3PzN1a8B0Iki7SuxV+EI/0ORLSKlACkcn\n08D/6IrNBkTQ/CAeZl+OfGX6s9F7aKMzddJFOF9Z08esl2Pr5a0WxqZvYojMLiug\n5bpEt0TttmmFiNWFY2fOAFOhvbcjrMZGRpXi/ii3HNvpWpVBeZKpxZlKs4bysP1u\ngpj8VmQbNQKBgCefZ6+OO/WXrKKh3PpIfvJ3UdlfOPdYBKe1t9jdcC4sC4CDaSGC\n5o0pI+bPs0sddej+nFUgg9kdvxiRWTJByhcWmFurOj4vbMLV6eoHM0Hxii/bChpc\nPw9FV24XVlqpadX4P+8IWPSpYVXKqk8nXw+BB+/6jq7oZrUieNllJCr1AoGADGXY\nQ2+A29qd9R4Ck2ZyhQLLD1ThLpYDbmxjOG0xRuHPshv8yFHA0VEVTTrxR1ozAH5O\nNaS0vs0XS1QKzKEDbvENvad6/eV5yi8AxTlpDnQy+3fgil/JXCSlg+HkDCPaXlLU\nPUFY29q1/jnEs2NYSug1kNpInQ7gdqObWic2KqkCgYA9d4xmSBOPDE+aCwmzddor\nUudYC6ZofqOam8iG5wt+TELS/q57uW3ebDYC4eP8xhUNdP9p5gO6SpYgQo7/Rv9v\nkiFDlfDl7Pt51UypIs//4TCJRQyoyWzP+hSB3Yc52fglmMN2aCUDsek7KvVl76gG\nJjpQb6P01DyeqK40nM97UQ==\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://ionicframeworkapp-bc20a.firebaseio.com"
});
