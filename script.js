//your JS code here. If required.
function ignoreArticles(bandName){
	return bandName.replace(/^(a |an |the )/i, '');

	}
		
	band.sort((a, b) => {
		const nameA = ignoreArticles(a);
		const nmaeB = ignoreArticls(b);
		return nameA.localCompare(nameB);
	})

const bandList = document.getElementById('band');
bands.forEach(band => {
	const listItem = document.createElement('li');
	listItem.textContent = band;
	bandList.appenedChild(listItem);
});
	

