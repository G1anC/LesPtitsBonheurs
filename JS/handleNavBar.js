

function handleNavBar()
{
    const navElement = document.getElementsByTagName("nav")[0];

    navElement.dataset.status === "active" ? navElement.dataset.status = "inactive" : navElement.dataset.status = "active";
    console.log(navElement);
}