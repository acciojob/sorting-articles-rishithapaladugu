//your JS code here. If required.
function sortBands(bandArray){
	return bandArray.sort((a, b) => {
		const aWithoutArticle = a.replace(/^(a |an |the )/i, '');
		const bWithoutArticle = b.replace(/^(a |an |the )/i, '');
		return aWithoutArticle.localeCompare(bWithoutArticle);
	});
		
	
}
const sortedBands = sortBands(bands);
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
	const listItem = document.createElement('li');
	listItem.textContent = band;
	bandList.appenedChild(listItem);
});
	

