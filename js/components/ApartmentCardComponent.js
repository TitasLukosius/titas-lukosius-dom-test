class ApartmentCardComponent {
    static USD_EUR = 0.88;

    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        const { type, owner, roomCount, square, address, price, imgSrc } = this.props;
        const { fullname, email, phone } = owner;
        const { city, country, street, number } = address;
        const { amount, currency } = price;

        const typeToUpper = type.charAt(0).toUpperCase() + type.slice(1);

        const priceAmount = currency === '$' ? amount * ApartmentCardComponent.USD_EUR : amount;
        const toEurAmount = Math.round(100* priceAmount) / 100;

        this.htmlElement = document.createElement('article');
        this.htmlElement.className = 'card p-2 shadow';
        this.htmlElement.innerHTML = `
            <img src="${imgSrc}" class="card-img-top"/ height="200px" style="object-fit: cover">
            <div class="card-body">
            <h2 class="h5">${typeToUpper} ${toEurAmount}€,</h2>
            <ul>
                <li>
                <span>Address</span>:
                <strong>${street}-${number}, ${city}, ${country}</strong>
                </li>
                <li>
                <span>Squares:</span>:
                <strong>${square}m2</strong>
                </li>
                <li>
                <span>Rooms:</span>:
                <strong>${roomCount}</strong>
                </li>
                <li>
                <span>Contacts</span>:
                <p><strong>Owners name: ${fullname}</strong></p>
                <p><strong>email address: ${email}</strong></p>
                <p><strong>phone number: ${phone}</strong></p>
                </li>
            </ul>
            </div>
        `
    }
}