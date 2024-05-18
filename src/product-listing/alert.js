export default class Alert{
    constructor(){
        this.alerts = [];
    }

    async loadAlerts(){
        try{
            const response = await fetch("alerts.json");
            console.log(response);
            this.alerts = await response.json();
            this.renderAlerts();
        }catch(error){
            console.log("Error loading alerts: ", error);
        }
    }

    renderAlerts(){
        if(this.alerts.length>0){
            const alertListSection =  document.createElement("section");
            alertListSection.className = "alert-list";

            this.alerts.forEach(alert =>{
                const alertParagraph = document.createElement("p");
                alertParagraph.textContent = alert.message;
                alertParagraph.style.backgroundColor = alert.background;
                alertParagraph.style.color = alert.color;
                alertListSection.appendChild(alertParagraph);
            });

            const mainElement = document.querySelector("main");
            if(mainElement){
                mainElement.prepend(alertListSection);
            }else{
                console.log("No <main> element found in the document.");
            }
        }
    }
}