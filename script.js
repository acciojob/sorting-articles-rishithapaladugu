//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Blend', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function sortBands(bands){
	return bands.sort((a, b) => {
		const getName = (name) => 
			name.replace(/^(a |an |the ) / i, '').trim();
		};
		return getName(a).localeCompare(getName(b));
	});
}
const sortedBands = sortBands(bands);
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
	const li = document.createElement('li');
	li.textContent = band;
	bandList.appendChild(li);
});

