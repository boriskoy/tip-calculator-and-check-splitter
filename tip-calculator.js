function calculateTotalWithTip(totalWithoutTip, tipPercent, howManyDiners) {      
      var totalWithTip = (Number(tipPercent) / 100 * Number(totalWithoutTip) + Number(totalWithoutTip)) / Number(howManyDiners);
      document.getElementById('total-with-tip').innerHTML = totalWithTip;
}


