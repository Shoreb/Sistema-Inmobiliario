document.addEventListener("DOMContentLoaded",()=>{

    const ctx=document.getElementById("ventasChart");

    new Chart(ctx,{
        type:"doughnut",
        data:{
            labels:["Disponibles","Reservados","Vendidos"],
            datasets:[{
                data:[24,8,12],
                backgroundColor:["#10b981","#f59e0b","#ef4444"]
            }]
        }
    });

});