function Product(props){
    let {productId, name, price, brand, description,image}=props.message;

    return(
        <div className="bg-blue-300 rounded-4xl p-3 ml-1">
            <h3><img className="block mx-auto rounded-xl" src={image} width="200" height="200" alt="image" />
                <br/>
                <b>ProductID:</b> {productId}
                <br/>
                <b>Name:</b> {name}
                <br/>
                <b>Price:</b> ${price}
                <br/>
                <b>Brand:</b> {brand}
                <br/> <br/>
                <b className="block text-center">Description:</b><p><i>{description}</i></p>
                <br/>   
            </h3>
        </div>
    )

}

export default Product