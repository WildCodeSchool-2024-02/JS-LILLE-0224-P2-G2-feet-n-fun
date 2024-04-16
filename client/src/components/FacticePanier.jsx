import "./Factice.css"
import FacticeCard from "./FacticeCard"


function FacticePanier () {


  const chaussettes = [
    {
      "id": 114,
      "src": "../assets/images/socks/Art/114.jpeg",
      "name": "Michelangelo",
      "desc": "Plongez vos pieds dans un chef-d’œuvre avec nos chaussettes ‘Michelangelo’ ! La palette de couleurs vivantes crée un spectacle visuel qui ne manquera pas d’attirer les regards, tandis que le confort supérieur vous permettra de parcourir les galeries de la vie quotidienne avec aisance. Portez-les et faites de chaque journée une exposition d’art exceptionnelle !",
      "price": 12.99,
      "new": false,
      "color": ["blue", "white"],
      "size": [{ "35_38": true }, { "39_42": true }, { "43_46": true }]
    },
    {
      "id": 115,
      "src": "../assets/images/socks/Art/115.jpeg",
      "name": "Georgia",
      "desc": "Éveillez vos sens avec les chaussettes ‘Georgia’! Inspirées par les toiles emblématiques de Georgia O’Keeffe, ces chaussettes sont une célébration de la couleur et de la forme. Chaque fibre est imprégnée de l’esprit audacieux de l’artiste, avec des motifs qui rappellent ses célèbres fleurs agrandies et ses paysages du Nouveau-Mexique. Portez un morceau de l’histoire de l’art à vos pieds et laissez-vous transporter dans un monde où la nature rencontre l’abstraction.",
      "price": 12.99,
      "new": false,
      "color": ["blue", "white"],
      "size": [{ "35_38": true }, { "39_42": true }, { "43_46": true }]
    },
    {
      "id": 116,
      "src": "../assets/images/socks/Art/116.jpeg",
      "name": "Keith",
      "desc": "Faites vibrer vos pas au rythme de Keith Haring avec nos chaussettes ‘Haring’ ! Inspirées par l’iconique artiste, ces chaussettes sont une toile de confort où danse l’art. Les silhouettes orange énergiques sur fond gris évoquent le dynamisme et la liberté d’expression caractéristiques de Haring. Un clin d’œil artistique à vos pieds, elles sont parfaites pour celles et ceux qui marchent sur le chemin de l’art avec audace et légèreté. Portez-les et faites de chaque pas une déclaration d’art !",
      "price": 12.99,
      "new": false,
      "color": ["blue", "white"],
      "size": [{ "35_38": true }, { "39_42": true }, { "43_46": true }]
    },
    {
      "id": 117,
      "src": "../assets/images/socks/Art/117.jpeg",
      "name": "Edvard",
      "desc": "Résonnez avec l’art expressionniste avec les chaussettes ‘Edvard’! Capturant l’essence tourmentée de la célèbre peinture de Munch, ces chaussettes sont un cri visuel qui traverse le tissu. Les lignes ondulantes et les couleurs ardentes enveloppent vos pieds, évoquant la puissance émotionnelle de l’œuvre originale. Portez un symbole de l’angoisse et de la beauté de la condition humaine, tout en ajoutant une touche de drame artistique à votre style quotidien.",
      "price": 12.99,
      "new": false,
      "color": ["blue", "white"],
      "size": [{ "35_38": true }, { "39_42": true }, { "43_46": true }]
    },
    {
      "id": 118,
      "src": "../assets/images/socks/Art/118.jpeg",
      "name": "René",
      "desc": "Découvrez le mystère à chaque pas avec nos chaussettes ‘René’ ! Inspirées par les œuvres surréalistes de René Magritte, ces chaussettes sont une énigme enveloppant vos pieds. Elles capturent l’essence de l’art de Magritte, où le jour se mêle à la nuit et la réalité au rêve. Avec leur design qui défie la logique, elles sont parfaites pour celles et ceux qui cherchent à ajouter une touche de poésie et d’énigme à leur garde-robe professionnelle. Confortables et captivantes, elles vous invitent à laisser libre cours à votre imagination. Portez-les et faites de chaque journée une œuvre d’art !",
      "price": 12.99,
      "new": false,
      "color": ["blue", "white"],
      "size": [{ "35_38": true }, { "39_42": true }, { "43_46": true }]
    },
    {
      "id": 119,
      "src": "../assets/images/socks/Art/119.jpeg",
      "name": "Haring",
      "desc": "Exprimez votre art de vivre avec nos chaussettes ‘Haring’ ! Inspirées par l’énergie des oeuvre de Keith Haring, ces chaussettes sont un véritable manifeste de style. Les motifs colorés et ludiques, mêlant figures humaines et formes géométriques, évoquent l’art de rue emblématique de Haring. Un hommage pied-à-terre à l’esprit rebelle de l’art moderne, elles sont la promesse d’une démarche audacieuse et d’un confort sans compromis. Laissez vos pieds parler d’art !",
      "price": 12.99,
      "new": false,
      "color": ["blue", "white"],
      "size": [{ "35_38": true }, { "39_42": true }, { "43_46": true }]
    },
    {
      "id": 120,
      "src": "../assets/images/socks/Art/120.jpeg",
      "name": "Auguste",
      "desc": "Promenez-vous dans une galerie d’art à chaque pas avec les chaussettes ‘Auguste’! Arborant un design riche et coloré qui rappelle les toiles vibrantes de l'époque d'Auguste Renoir, ces chaussettes transforment vos pieds en chefs-d’œuvre ambulants. Le confort rencontre la classe dans ce tissu doux, où chaque couleur raconte une histoire de rencontres et de paysages urbains. Idéales pour les amateurs d’histoire et d’élégance, elles ajoutent une touche de sophistication à toute tenue, tout en gardant une pointe d’humour.",
      "price": 12.99,
      "new": false,
      "color": ["blue", "white"],
      "size": [{ "35_38": true }, { "39_42": true }, { "43_46": true }]
    }
  ] 

return (<>
<button type="button" className="buttonCloseDeliveryPayment">
    <img src="./public/assets/images/icons/exit-btn-red.svg" alt="croix"/>
  </button>
    <h2>Panier</h2>
    <div className="cardsContainerCart">
    {chaussettes.map((chaussette) => (<FacticeCard key={chaussette.id} name = {chaussette.name} src={chaussette.src} price={chaussette.price}/>))}
    
    <span className="totalCart">Total : €</span>
    <button type="button" className="cartValidationButton">Valider</button>
</div>
    </>
)

}

export default FacticePanier