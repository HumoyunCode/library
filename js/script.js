const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}





const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "red",
        fill: false,
      },
      {
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "green",
        fill: false,
      },
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});


// Pie Chart Data
    const pieData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    };

    // Bar Chart Data
    const barData = {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 17, 28],
        backgroundColor: '#36A2EB'
      }]
    };

    // Pie Chart Configuration
    const pieConfig = {
      type: 'pie',
      data: pieData
    };

    // Bar Chart Configuration
    const barConfig = {
      type: 'bar',
      data: barData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // Create Pie Chart
    const pieChart = new Chart(
      document.getElementById('pieChart'),
      pieConfig
    );

    // Create Bar Chart
    const barChart = new Chart(
      document.getElementById('barChart'),
      barConfig
    );