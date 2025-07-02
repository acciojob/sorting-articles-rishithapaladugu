//your JS code here. If required.
const bands = [' The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Blend', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
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
console.log(bands);
	

