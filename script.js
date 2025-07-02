//your JS code here. If required.
function ignoreArticles(bandName){
	return bandName.replace(/^(a |an |the )/i, '');

	}
		
	bands.sort((a, b) => {
		const nameA = ignoreArticles(a);
		const nameB = ignoreArticles(b);
		return nameA.localeCompare(nameB);
	})

const bandList = document.getElementById('band');
bands.forEach(band => {
	const listItem = document.createElement('li');
	listItem.textContent = band;
	bandList.appendChild(listItem);
});
	

