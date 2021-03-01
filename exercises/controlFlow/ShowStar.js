function showStars(rows) {
    let row = '';
    for (let i = 1; i <= rows; i++)
        console.log(row += '*');
}

showStars(2);
