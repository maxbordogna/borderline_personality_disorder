SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 1: Marionetta digitale  

# Disturbo personalità
Autore: Massimo Bordogna  
[MediaPipe demo-ES6](https://ixd-supsi.github.io/2023/esempi/mp_hands/es6/1_landmarks)


## Introduzione e tema
La consegna consisteva nel progettare un sistema di interfaccia per generare una marionetta in 
realtà aumentata che rappresenti un personaggio reale o inventato  con un proprio carattere. 
Il progetto da me realizzato è stato chiamato “Disturbo Personalità”, una scelta che mira 
a raccontare la caratteristica espressiva della marionetta, lasciando all’utilizzatore finale 
il compito di associarla ad un nome. 
La marionetta  si presenta attraverso due stati: 
lo stato base (pacato), e lo stato alterato (pazzo). La caratteristica formale principale è 
espressa dall’unione di elementi fotografici con elementi generati direttamente attraverso 
il codice. 


## Riferimenti progettuali
Per quanto riguarda la scelta degli elementi che avrebbero formato la marionetta ho preso 
spunto dai celebri “Groucho Glasses”, in riferimento al comico “Groucho Marx”. Pochi elementi 
quindi, ma funzionali allo scopo comunicativo. 

Ho però effettuato delle modifiche rispetto alla maschera originale: ho deciso di togliere 
naso e sopracciglia ed aggiungere capelli e occhi. In particolare occhi e capelli sono stati 
essenziali per aumentare la differenza caratteriale nei due stati emotivi della marionetta.

[<img src="img_readme/groucho_glasses.jpg" width="150" alt="Groucho glasses">]()
<br>
Groucho glasses 
<br>
https://user-images.githubusercontent.com/6561331/236182302-68a6bd12-7b83-4d19-b83e-c9b7db795881.mp4


## Design dell’interfraccia e modalià di interazione
All’apertura della pagina uno sfondo bianco tinta unita leggermente trasparente è sovrapposto all'immagine 
registrata dalla webcam del computer. Nel momento in cui la mano destra chiusa viene inquadrata 
attraverso la webcam, compare la marionetta nel suo stato base. Essa segue i movimenti della mano indirizzando 
gli occhi verso l’esterno del canvas, i capelli hanno uno stato che ne simula la fisicità attraverso peso 
e gravità. Nel momento in cui l’utente apre la mano, la marionetta cambia da stato base a stato 
alterato, che si contraddistingue da una bocca aperta, gli occhiali rotti, i capelli allungati verso l’alto 
(con diversi spessori) e gli occhi rotanti con un bordo seghettato. Inoltre è stato introdotto l’effetto 
sonoro di un urlo che aumenta l’efficacia comunicativa dello stato della marionetta.

[<img src="doc/cards.gif" width="500" alt="Magic trick">]()


## Tecnologia usata
Per la simulazione della fisicità dei capelli è stato utilizzato l’esempio sul sito di p5js chiamato “Chain”, 
codice che collega più elementi attraverso la loro posizione imitando una catena e 
determinandone lo stato attraverso una simulazione della gravità e del peso. Questo esempio è 
stato modificato ed implementato all’interno del mio codice ottenendo dei capelli che seguono 
la posizione della mano e che cambiano lunghezza, peso e gravità a dipendenza dello stato (umore) della marionetta.

Il movimento degli occhi nello stato base è ottenuto attraverso la funzione map che mi ha permesso 
di mappare la larghezza e l’altezza del canvas nello spostamento massimo che le pupille possono 
effettuare attorno al keypoint di riferimento.


```JavaScript
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```

## Target e contesto d’uso
Non avendo costruito l’elaborato pensando in anticipo ad un target e ad un contesto specifico è 
difficile individuarne uno perfettamente calzante. Ovviamente andrebbe quindi adeguato al suo utilizzo 
finale, potrei però vedere la marionetta applicata ad un contesto espositivo quale magari una fiera 
o un’esposizione in cui i visitatori possono provare allo stand di riferimento la marionetta. 
Oppure potrebbe essere utilizzata all’interno di un sito web come interazione con l’utente stuzzicandone 
l’interesse e creando un legame di interazione attiva.

[<img src="doc/munari.jpg" width="300" alt="Supplemento al dizionario italiano">]()
