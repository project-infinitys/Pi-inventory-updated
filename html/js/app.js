@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');

p {
	margin: 0 !important;
}

:root {
	--main-label-color: 0, 0, 0;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

::-webkit-scrollbar {
	width: 0px;
}

/* ::-webkit-scrollbar-thumb {
	border-radius: 50px;
	background: #00fbff;
	box-shadow: 0 0 1em 0 #00fbff;
} */

body {
	overflow-x: hidden;
}
@keyframes gelatine {
    from, to { transform: scale(1, 1) perspective(1em) rotateZ(0deg); }
    25% { transform: scale(0.6, 1.3) perspective(1em) rotateZ(0deg); }
    50% { transform: scale(1.3, 0.6) perspective(1em) rotateZ(0deg); }
    75% { transform: scale(1.1, 1) perspective(1em) rotateZ(0deg); }
    100% { transform: scale(1, 1) perspective(1em) rotateZ(0deg); }
  }
#qbcore-inventory {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0vw;
	display: none;
	background: radial-gradient(circle, rgba(0, 71, 99, 0.801) 0%, rgba(0,0,0,1) 90%);
}

.inv-background {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
}

.inv-container {
	position: absolute;
	width: 100%;
	height: 100%;
	animation: gelatine 0.6s;
}

.player-inventory {
	position: absolute;
	top: 17%;
	left: 7.2%;
	width: 35.3%;
	height: 57.16%;
	float: left;
	overflow-x: hidden;
	overflow-y: scroll;
	z-index: 100;
	border:1px solid;
	border-image : linear-gradient(-170deg, white 10%,#af261c00 18%, #af261c00 30%, #af261c00 65%,#af261c00 85%, white 100%) 10;
}

.other-inventory {
	position: absolute;
	top: 17%;
	right: 6%;
	width: 35.3%;
	height: 57.16%;
	float: left;
	overflow-x: hidden;
	overflow-y: scroll;
	z-index: 100;
	border:1px solid;
	border-image : linear-gradient(-170deg, white 10%,#af261c00 18%, #af261c00 30%, #af261c00 65%,#af261c00 85%, white 100%) 10;
}

.ply-hotbar-inventory {
	position: absolute;
	bottom: 10%;
	left: 35.5%;
	z-index: 105;
}

.player-inventory>.item-slot>.item-slot-key>p {
	position: absolute;
	font-weight: bolder;
	color: white;
	padding: .3vh;
	padding-left: .5vh;
	text-align: left;
	font-size: 1.1vh;
	line-height: 1.8vh;
	font-family: 'Ubuntu Mono', monospace;
}

.inv-options {
	position: absolute;
	margin: 0 auto;
	right: 0;
	width: 9%;
	top: 28%;
	left: 6vh;
}

.combine-option-container {
	display: none;
	position: absolute;
	margin: 0 auto;
	right: 0;
	width: 8.5%;
	top: 59%;
	left: 0vh;
}

.item-slot {
	position: relative;
	width: 9.5vh;
	height: 11.5vh;
	float: left;
	background-color: rgba(0, 0, 0, 0.267);
	margin: 5px;
	opacity: 1.0;
	transition: all 0.2s linear;
	clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);
	
}

.item-slot-hoverClass {
	opacity: .6;
}

.item-slot:hover {
	background: linear-gradient(238deg, #fd870000, rgba(255,255,255,.4), #9800fd00, rgba(255,255,255,.4), #00fbff00, rgba(255,255,255,.4));
	background-size: 1200% 1200%;
	-webkit-animation: rainbow 10s ease infinite;
	animation: rainbow 10s ease infinite;
  }
  @-webkit-keyframes rainbow {
	0% { background-position: 0% 50% }
	50% { background-position: 100% 50% }
	100% { background-position: 0% 50% }
  }
  @keyframes rainbow {
	0% { background-position: 0% 50% }
	50% { background-position: 100% 50% }
	100% { background-position: 0% 50% }
  }

.inv-option-item {
	margin-top: 10%;
}

.btn-inv {
	width: 100%!important;
	max-width: 100%!important;
	padding: 10%!important;
	background-color: rgba(235, 235, 235, 0);
}

#item-amount {
	color: white;
	text-align: center;
	font-size: 1.25vh;
	font-family: 'Ubuntu Mono', monospace;
	outline: none;
}

.ammo-info-block {
	position: absolute;
	margin: 0 auto;
	left: 0;
	right: 0;
	width: 22vh;
	height: 11vh;
	background-color: rgba(235, 235, 235, 0.08);
	border: 1px solid rgba(255, 255, 255, 0.01);
	top: 2vh;
}

.ammo-info-header {
	width: 100%;
	color: white;
	font-family: 'Ubuntu Mono', monospace;
	background-color: rgba(0, 0, 0, 0.192);
	font-size: 1.vh;
	padding: .4vh;
	text-align: center;
}

.ammo-info {
	position: relative;
	color: white;
	font-family: 'Ubuntu Mono', monospace;
	font-weight: 200;
	font-size: 1.vh;
	margin-left: .8vh;
	margin-top: .4vh;
	margin-bottom: .25vh;
	top: .6vh;
}

.ammo-info span {
	margin-right: 1vh;
	float: right;
}

.inv-option-item>p {
	color: white;
	text-align: center;
	line-height: 48px;
	text-transform: uppercase;
	font-size: 1.2vh;
	font-weight: 900;
	font-family: 'Ubuntu Mono', monospace;
}

.inv-option-item {
	width: 75%;
	height: 50px;
	color: white;
}
/* CSS */
.inv-option-item {
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  margin-bottom: 15px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.inv-option-item::after,
.inv-option-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.inv-option-item::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d2d;
  border-radius: 10px;
}

.inv-option-item::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;

  border-radius: 50px;
}

.inv-option-item:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.inv-option-item:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.inv-option-item:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}



.btn-combine {
	position: relative;
	margin-top: 20px;
	width: 78%;
	left: 2px;
	color: white;
	border: 1px solid rgba(255, 255, 255, .01);
	background-color: rgba(220, 20, 60, 0.6);
	text-align: center;
	line-height: 48px;
	text-transform: uppercase;
	font-size: 1.2vh;
	transition: background-color .1s linear;
	font-weight: 900;
	font-family: 'Ubuntu Mono', monospace;
}

.btn-combine>p {
	color: white;
	text-align: center;
	line-height: 48px;
	text-transform: uppercase;
	font-size: 1.1vh;
	font-family: 'Ubuntu Mono', monospace;
	background-color: rgb(0 0 0 / 20%);
}

.item-slot-amount {
	position: absolute;
	top: 0.7vh;
	right: 0.6vw;
}

.item-slot-amount>p {
	color: #ffffff;
	text-align: right;
	font-size: 0.8vh;
}

.item-slot-label {
	position: absolute;
	bottom: 0;
	width: 100%;
}

.item-slot-label>p {
	text-transform: uppercase;
	font-weight: 900;
	color: white;
	font-size: 0.8vh;
	padding: 3px;
	text-align: center;
	letter-spacing: 1px;
	font-family: 'Ubuntu Mono', monospace;
}

.item-slot-quality {
	position: absolute;
	bottom: 1.7vh;
	width: 100%;
	height: .3vh;
	background-color: rgba(32, 6, 6, 0.15);
}

.item-slot-quality-bar {
	position: absolute;
	width: 0%;
	height: 100%;
	background-color: green;
	z-index: 1;
}

.item-slot-quality p {
	color: transparent;
}

.item-slot-img {
	max-width: 100%;
	max-height: 100%;
	padding: 0.5vw;
}

.item-slot-img img {
	display: block;
	position: relative;
	margin: 0 auto;
	margin-top: 21%;
	width: 70px;
	height: 70px;
	max-width: 100%;
	max-height: 100%;
}

.ui-draggable-dragging {
	background: rgba(0, 0, 0, 0.3);
}

.player-inv-info {
	position: absolute;
	top: 10%;
	left: 7.2%;
	animation: gelatine 0.6s;
}

#player-inv-label {
	position: relative;
	color: white;
	font-size: 16px;
	font-family: 'Ubuntu Mono', monospace;
	font-weight: bold;
	letter-spacing: 0.2vh;
	bottom: 0px;
	float: left;
	text-transform: uppercase;
}

#player-inv-weight {
	color: white;
	font-size: 12px;
	font-weight: 900;
	font-family: 'Ubuntu Mono', monospace;
	letter-spacing: 0.2vh;
	float: left;
}

#other-inv-label {
	position: relative;
	color: white;
	font-size: 16px;
	font-family: 'Ubuntu Mono', monospace;
	font-weight: bold;
	letter-spacing: 0.2vh;
	bottom: 0px;
	float: left;
	text-transform: uppercase;
}

#other-inv-weight {
	color: white;
	font-size: 12px;
	font-weight: 900;
	font-family: 'Ubuntu Mono', monospace;
	letter-spacing: 0.2vh;
	float: left;
}

.player-inv-weight {
	position: absolute;
	left: 38%;
	top: 12%;
}

.player-inv-weight>p {
	color: white;
	font-size: 12px;
	font-family: 'Ubuntu Mono', monospace;
}

.other-inv-info {
	position: absolute;
	left: 59%;
	top: 10.2%;
	animation: gelatine 0.6s;
}

.ply-iteminfo-container {
	font-family: 'Ubuntu Mono', monospace;
	display: none;
	position: absolute;
	bottom: 3%;
	margin: 0 auto;
	left: 150px;
	right: 0;
	text-align: right;
	width: 103.4vh;
	height: 17vh;
}

.item-info-title {
	text-transform: uppercase;
	font-weight: 900;
	font-family: 'Ubuntu Mono', monospace;
	font-size: 1.3vh;
	color: white;
	padding-top: 1px;
}

.item-info-line {
	position: absolute;
	font-family: 'Ubuntu Mono', monospace;
	width: 100%;
	background-color: white;
	height: 0vh;
}

.item-info-description {
	text-transform: uppercase;
	font-size: 1vh;
	font-family: 'Ubuntu Mono', monospace;
	color: white;
	padding-top: .5vh;
}

.itemboxes-container {
	height: 130px;
	min-width: 110px;
	max-width: 550px;
	width: fit-content;
	position: absolute;
	left: 1%;
	bottom: 45%;
	overflow: hidden;
}

.template {
	display: none;
}

.itembox-container {
	display: none;
	position: relative;
	float: left;
	margin: 0 auto;
	margin-right: 10px;
	width: 9vh;
	height: 11vh;
    background: radial-gradient(circle, rgba(0, 71, 99, 0.801) 0%, rgba(0,0,0,1) 100%);
    clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);
}

#itembox-action {
	position: absolute;
	color: white;
	border-top-left-radius: 1px;
	padding: 4px;
	top: 0;
	left: 0;
}

#itembox-action>p {
	font-size: 10px;
	font-family: 'Ubuntu Mono', monospace;
}

#itembox-label {
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: rgba(var(--main-label-color), 0.35);
	min-height: 2.2vh;
	height: fit-content;
}

#itembox-label>p {
	color: #ffffff;
	font-size: 11px;
	text-align: center;
	text-transform: uppercase;
	line-height: 3vh;
}

.requiredItem-container {
	display: none;
	position: absolute;
	height: 100vh;
	width: 100vw;
}

.requiredItem-box {
	position: relative;
	top: 70%;
	left: 42%;
	width: 9vh;
	height: 11vh;
	float: left;
	margin-left: 20px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	background-color: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(68 68 68 / 40%);
}

#requiredItem-action {
	position: absolute;
	left: 0;
	top: 0;
	color: white;
	padding: 3px;
	font-size: 10px;
	font-family: 'Ubuntu Mono', monospace;
}

#requiredItem-label {
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: rgb(0 0 0 / 20%);
	height: 2.6vh;
}

#requiredItem-label>p {
	color: #ffffff;
	font-size: 11px;
	text-align: center;
	text-transform: uppercase;
	line-height: 3vh;
}

.z-hotbar-inventory {
	display: none;
	position: absolute;
	bottom: 13%;
	margin: 0 auto;
	left: 87%;
	right: 0;
	width: 1;
	z-index: 105;
}

.z-hotbar-inventory>.z-hotbar-item-slot>.z-hotbar-item-slot-key>p {
	position: absolute;
	color: #ffffff;
	border-top-left-radius: 1px;
	padding: .3vh;
	padding-left: .5vh;
	padding-right: .5vh;
	text-align: left;
	font-size: 1.1vh;
	line-height: 1.8vh;
	font-family: 'Ubuntu Mono', monospace;
}

.z-hotbar-item-slot {
	position: relative;
	width: 8.5vh;
	height: 10.5vh;
	float: left;
	margin-left: 2px;
	margin-bottom: 2px;
	margin: 3px;
	transition: opacity 0.2s;
	opacity: 1.0;
    background: radial-gradient(circle, rgba(0, 71, 99, 0.801) 0%, rgba(0,0,0,1) 100%);
    clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);
}

.z-hotbar-item-slot-amount {
	position: absolute;
	top: 0.3vh;
	right: 0.3vw;
}

.z-hotbar-item-slot-amount>p {
	color: #ffffff;
	text-align: right;
	font-size: 10px;
}

.z-hotbar-item-slot-label {
	position: absolute;
	bottom: 0;
	width: 100%;
	min-height: 2.2vh;
	height: fit-content;
}

.z-hotbar-item-slot-label>p {
	color: rgb(247, 247, 247);
	font-size: 11.5px;
	text-align: center;
	text-transform: lowercase;
	font-family: 'Ubuntu Mono', monospace;
	font-variant: small-caps;
}

.z-hotbar-item-slot-img {
	max-width: 100%;
	max-height: 100%;
	padding: 0.9vw;
}

.z-hotbar-item-slot-img img {
	margin-top: 21%;
	display: block;
	width: 60px;
	height: 60px;
	max-width: 100%;
	max-height: 100%;
}

.ammo-container {
	position: absolute;
	background-color: rgba(20, 18, 32, 0.2);
	width: 3.25%;
	height: 44.16%;
	top: 26%;
	left: 6%;
}

.ammo-container-header {
	position: absolute;
	top: 0;
	width: 100%;
	height: 5vh;
	background-color: rgba(120, 10, 20, 0.5);
	text-align: center;
	color: rgba(216, 216, 216, 0.897);
}

.ammo-container-header>i {
	line-height: 5vh;
	font-size: 1.8vh;
}

.ammo-box {
	position: relative;
	width: 100%;
	height: 6vh;
	top: 5vh;
	background-color: rgba(0, 0, 0, .4);
	margin-bottom: .5vh;
	margin-top: .5vh;
}

.ammo-box>img {
	position: absolute;
	top: .15vh;
	left: .2vh;
	width: 5.25vh;
	opacity: .25;
}

.ammo-box>span {
	position: absolute;
	color: rgba(255, 255, 255, 0.95);
	font-size: .93vh;
	bottom: 0;
	right: 0;
	margin: .3vh;
	font-family: 'Ubuntu Mono', monospace;
}

.ammo-box-amount {
	position: absolute;
	width: 100%;
	background-color: rgba(36, 36, 36, 0.4);
	bottom: 0;
	max-height: 100%;
}

#pistol_ammo>.ammo-box-amount {
	height: 0%;
}

#smg_ammo>.ammo-box-amount {
	height: 0%;
}

#shotgun_ammo>.ammo-box-amount {
	height: 0%;
}

#rifle_ammo>.ammo-box-amount {
	height: 0%;
}

/* Weapon Attachments */

.weapon-attachments-container {
	position: absolute;
	left: -100vw;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}

.weapon-attachments-container-title {
	position: absolute;
	margin: 5vh;
	font-size: 3vh;
	color: rgb(255, 255, 255);
	font-family: 'Ubuntu Mono', monospace;
}

.weapon-attachments-container-description {
	position: absolute;
	margin: 5vh;
	top: 5vh;
	font-size: 1.7vh;
	color: rgba(255, 255, 255, 0.8);
	font-family: 'Ubuntu Mono', monospace;
}

.weapon-attachments-container-details {
	position: absolute;
	margin: 5vh;
	top: 9vh;
	font-size: 1.4vh;
	color: rgba(255, 255, 255, 0.8);
	font-family: 'Ubuntu Mono', monospace;
}

.weapon-attachments-container-detail-durability {
	height: 1.5vh;
	width: 10vh;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 1px;
}

.weapon-attachments-container-detail-durability-total {
	height: 100%;
	width: 50%;
	background-color: rgb(39, 174, 96);
}

.weapon-attachments-container-image {
	position: absolute;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: 32%;
	width: 30%;
}

.weapon-attachments {
	position: absolute;
	bottom: 0;
	left: 0;
	margin: 5vh;
	width: 50vh;
	height: 12.5vh;
}

.weapon-attachments-title {
	position: absolute;
	bottom: 14vh;
	left: 0;
	margin: 5vh;
	color: rgba(255, 255, 255, 0.8);
	font-family: 'Ubuntu Mono', monospace;
	font-size: 1.4vh
}

.weapon-attachment {
	position: relative;
	height: 12.5vh;
	width: 10.5vh;
	background-color: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(75, 75, 75);
	margin-right: 1vh;
	float: left;
	transition: .05s linear;
}

.weapon-attachment:hover {
	background-color: rgba(0, 0, 0, 0.4);
	border: 1px solid rgb(29, 29, 29);
	transition: .05s linear;
}

.weapon-attachment-label {
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: rgba(var(--main-label-color), 0.3);
	padding: 2.1%;
}

.weapon-attachment-label>p {
	color: #ffffff;
	font-size: 1.1vh;
	text-align: center;
	text-transform: uppercase;
	line-height: 1.9vh;
	font-family: 'Ubuntu Mono', monospace;
	font-weight: 100;
}

.weapon-attachment-img {
	max-width: 100%;
	max-height: 100%;
	padding: 0.5vw;
}

.weapon-attachment-img>img {
	display: block;
	position: relative;
	margin: 0 auto;
	margin-top: 10%;
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
}

.weapon-attachments-remove {
	position: absolute;
	width: 6.5vh;
	height: 6.5vh;
	background-color: rgb(15, 15, 15);
	border-radius: 1px;
	margin: 0 auto;
	left: 0;
	right: 0;
	bottom: 20vh;
	text-align: center;
	color: white;
	font-size: 2vh;
	transition: background-color .05s linear;
}

.weapon-attachments-remove:hover {
	background-color: rgb(18, 18, 18);
}

.weapon-attachments-remove>i {
	line-height: 6.5vh;
}

.weapon-attachments-remove-hover {
	background-color: rgb(39, 174, 96);
}

.weapon-dragging-class {
	animation: ShakeEffect .75s;
	animation-iteration-count: infinite;
}

@keyframes ShakeEffect {
	0% {
		transform: translate(1px, 1px) rotate(0deg);
	}
	10% {
		transform: translate(-1px, -2px) rotate(-1deg);
	}
	20% {
		transform: translate(-3px, 0px) rotate(1deg);
	}
	30% {
		transform: translate(3px, 2px) rotate(0deg);
	}
	40% {
		transform: translate(1px, -1px) rotate(1deg);
	}
	50% {
		transform: translate(-1px, 2px) rotate(-1deg);
	}
	60% {
		transform: translate(-3px, 1px) rotate(0deg);
	}
	70% {
		transform: translate(3px, 1px) rotate(-1deg);
	}
	80% {
		transform: translate(-1px, -1px) rotate(1deg);
	}
	90% {
		transform: translate(1px, 2px) rotate(0deg);
	}
	100% {
		transform: translate(1px, -2px) rotate(-1deg);
	}
}

.weapon-attachments-back {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 10vh;
	height: 6vh;
	margin: 5vh;
	background-color: rgb(15, 15, 15);
	border-radius: 1px;
	text-align: center;
	line-height: 6vh;
	color: white;
	font-family: 'Ubuntu Mono', monospace;
	transition: .05s linear;
}

.weapon-attachments-back:hover {
	background-color: rgb(18, 18, 18);
}
