// firebaseConfig.js
const admin = require('firebase-admin');
// const serviceAccount = require('C:\Users\ashik\Documents\Code\seat-booking-system\firebaseServiceAccount.js');

const serviceAccount = {"type": "service_account",
  "project_id": "seat-map-visualization",
  "private_key_id": "690ed3aeb326d219ce8206480eb4f28256f91fec",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDmmOvggmyToMGJ\noTxa5Lt8irnIkET6mGM4+54XpEym9Lf2B9QUN+7JISuSvk6tBSW4We39vNKomQ6k\nEV03rTLLgsppENlnTYXQE6OrLPHbyRVyLegODyHNcGSwXS/zcwGTQEzRPHCbitws\naroXumbCVGCU4EecDyB4Rwx1/oMe9XTLXZ75YGGKdU8kzUvV1IPSd3EPxhHVnXHb\nV1kZQG3X6dlMF/1/m6AQ2rWIV21ibJ3KzEDMb3GAv3eh0ZCRgNhSwvovGAMPPx0L\nYIBlddncqExI3v2AOGL6nIWFjzHfR32XSkLRFzLUfRvbb7ZIvUiLewJf6zTK8g0y\n4EgtM9o9AgMBAAECggEADmgmcH/lhbGo9c7PhQQ+XHEUW138GUX1CQXbYjG/Ij0u\n0x25F8xIzGMYpFHke3XTXfmsX0pxRNxPKFv3XXeiMUnKGJdXZddXkWDwvEySDb+5\n6cjJcztpyrqHZ+dijAy23/rH8dibVnRt/g5q8vmP2vtHj3WVs7/UMP+LXUHZ8lCY\nLaRnt37UVHu5SB+99l1OdgdN+FIdfXLbLimjOLuQqaDi8OcwOzDdthaPaqedh0Ul\nkOoVTmwT7uAhU2PGEg8J8Kien6PVwW/iQ0bQepumW5Bc6d/ppPP+PuwUUU2p5ENs\nvSj4hqXTIvxA7FjXpDlIbw6RJxvi3ny7oF9A9VcZ9wKBgQD4z5agJhOAPwzoVE+r\nUsiJygkoHxoB7kp5vFRsvrDHYsIEgooMtNtmJEh4R5jSzs5RD/JMAT+GKAKZDsae\nuRAx//W1qnFYp9RTgbboZwMhP7ilLvLJO2zR/m3zc57LxY+FwhKiFjboox2yrVXS\nZwi4Pa6TvHomYogdl5XsgN3WywKBgQDtQpxNFDo6VsCa183uqKszwHtKLsiFmVYe\nWktk//KRaBXR/KipJfc4pS8z5G1wCXaLn8UHTNXtOajxfH89YjPQo5vjX2PVzyJH\niuh5zNwDCH4002hfmwFy2rY686Xb/fBNE9ok/WDps11acxwcRe8rRuPFeMRuk3RW\nw0gGKtDqFwKBgQDCXoDf2P7w99BgisS2JPSOV6txkWJi0cGSeiJF1W4KRMcmeMfZ\nh0vB7mRCukPTo0UfpGJ3J551cjodUaKuCgpx1PAhG+ZyCKHhHntB8H9McRgQyq1V\nsLuhDK7eOZt6unoVVvfxcYMxl4OyuqBJvr3cGCuSM/IEnIKTA4FWgZFLowKBgQC2\nWwMNDyXt3u2sVX+3FjZ30VIxYyHF5WPWcmoOV9ZVQh27RqlPUJniFLvh84jVmsBd\nclAaW0j1SuL5sEmPoWHX01gmexOdqtVbDX2+1+CmCCoQagiHqviDEW0MhGYPXu8K\nHt8EnSaWmMCAm4aYiHvZ1GOOTFMV9gluAiviaZgmwwKBgQC+XjNF0Tv7w37tq5/y\nR+Opl+yGwTEHIZct5mjW3QiQaVoRi3IYEnmcCbpMv5qGmfzEqbkirvjNzVZTaF+3\nVTzV3Vki2CM0tUy2C16QymqY+d5qRNE2rfAoOn63cWXYl+U243dtUNbI5ehaB7tb\nGKUd3AnWco3JPnofwUKo9Yh20w==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-1x4tx@seat-map-visualization.iam.gserviceaccount.com",
  "client_id": "118156875184074953380",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1x4tx%40seat-map-visualization.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'firebase-adminsdk-1x4tx@seat-map-visualization.iam.gserviceaccount.com' // replace with your Firebase database URL
});

const db = admin.firestore();

module.exports = db;
