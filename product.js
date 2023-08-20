

const addProduct = () => {
    let name = document.getElementById('Itemname').value;
    let category = document.getElementById('SelectCategory').value;
    let description = document.getElementById('Describeitem').value;
    let unit = document.getElementById('Unitname').value;
    let price = document.getElementById('Unitprice').value;
    // let quantity = document.getElementById('contact').value;
    let image = document.getElementById('cameraicon').value;
}
const app = firebase.initializeApp(firebaseConfig);
console.log(app)