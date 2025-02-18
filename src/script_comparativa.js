var chart = echarts.init(document.getElementById('chart'));

// Datos de ejemplo (deberían venir de una fuente real)
var fechas = ["01.10", "08.10", "15.10", "22.10", "29.10", "05.11", "12.11", "19.11", "26.11"]; // fecha - dimensión
var ventas = [2000, 2500, 2700, 3300, 3100, 2900, 3200, 3600, 2800]; // número - métrica
var planVentas = [2200, 2600, 2800, 3400, 3200, 3100, 3300, 3700, 3000]; // número - métrica
var añoPrevio = [2100, 2550, 2750, 3250, 3150, 2950, 3100, 3550, 2900]; // número - métrica
var añoPrevio2 = [2150, 2580, 2800, 3350, 3180, 3000, 3200, 3580, 2950]; // número - métrica

// Cálculo de diferencia con el plan de ventas
var diferenciaPlan = ventas.map((v, i) => v - planVentas[i]);

 var option = {
    title: { text: 'Comparativa de Ventas', left: 'center' },
    tooltip: { trigger: 'axis' },
    legend: {
        data: ['Ventas', 'Plan de Ventas', 'Año n-1', 'Año n-2'],
        bottom: 0
        },
    xAxis: { type: 'category', data: fechas },
    yAxis: [
        { type: 'value', name: 'Ventas' },
    ],
    grid: { left: '10%', right: '10%', bottom: '15%' },
    series: [
        { name: 'Ventas', type: 'line', data: ventas, areaStyle: { opacity: 0.2 }, color: 'blue' },
        { name: 'Plan de Ventas', type: 'line', data: planVentas, color: 'orange' },
        { name: 'Año n-1', type: 'line', data: añoPrevio, color: 'red', lineStyle: { type: 'dashed' } },
        { name: 'Año n-2', type: 'line', data: añoPrevio2, color: 'black', lineStyle: { type: 'dashed' } },
    ]
};

chart.setOption(option);