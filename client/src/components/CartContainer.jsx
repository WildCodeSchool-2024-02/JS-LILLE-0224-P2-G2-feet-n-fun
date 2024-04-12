import "./CartContainer.css";

function CartContainer() {
  return (
    <>
      <h2>Panier</h2>
      <div className="cardContainerCart"> </div>
      <section className="deliverySection">
        <div className="imgProduct">
          <img src="../../public/assets/images/socks/Festif/121.jpeg" alt=""/>
        </div>
        <section className="detailPanier">
          <p className="quantityP">
            Quantité :<span className="quantity"> ...</span>
          </p>
          <p className="priceP">
            Prix :<span>prix</span>
          </p>
          <p className="sizeP">
            Taille :<span>size</span>
          </p>
        </section>
        <section className="btnaction">
          <div className="btndelete">
            <button type="button"><img src="../../public/assets/images/icons/delete.svg" alt=''/>.</button>
          </div>
        </section>
      </section>
    </>
  );
}

export default CartContainer;
