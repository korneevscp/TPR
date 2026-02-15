//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL du logo du serveur
var l_serverImage = "";

// Centrer le logo ?
var l_centerLogo = false;

// Afficher la carte et le mode de jeu ?
var l_displayMapGamemode = false;

// Nom du serveur
var l_serverName = "TPR RôlePlay";

// Utiliser une vidéo ? (Mis sur false pour privilégier vos images 1.png, 2.png...)
var l_bgVideo = false;

// Vidéo par défaut
var l_background = "1.webm";

// Image basée sur la map
var l_bgImageMapBased = false;

// Liste de vos images de fond
var l_bgImages = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg"
];

// Ordre aléatoire des images
var l_bgImagesRandom = true;

// Délai entre images (5 sec)
var l_bgImageDuration = 5000;

// Vitesse de transition (2 sec)
var l_bgImageFadeVelocity = 2000;

// Overlay et assombrissement
var l_bgOverlay = true;
var l_bgDarkening = 50;

// MUSIQUE (Activée et Volume ajusté)
var l_music = true;
var l_musicDisplay = true;
var l_musicPlaylist = [
	{ogg: "1.ogg", name: "i-love-you-california-anthem-of-new-californian-republic"}
];
var l_musicRandom = false;
var l_musicVolume = 2;

// MESSAGES (Ajout de variété pour l'animation)
var l_messagesEnabled = true;
var l_messages = [
	"Bienvenue sur TPR RôlePlay !",
	"Service de police de Los Angeles !",
	"Suivez le règlement pour une meilleure expérience.",
	"Besoin d'aide ? Contactez un administrateur via le !report"
];

var l_messagesRandom = true;
var l_messagesDelay = 5000;
var l_messagesFade = 1000;

// Debug
var l_showErrorsIngame = true;

//==============================================================
//========= Ne modifiez rien en dessous de cette ligne ==========
//==============================================================
var checkConfigFile = function() {
	return true;
};
