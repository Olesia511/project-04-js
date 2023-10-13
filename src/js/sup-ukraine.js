
const charities = [

    {
        title: 'Save the Children',
        url:
          'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
          img: './img/save-the-children.png',
          img2x: './img/save-the-children-2x.png',
        },
      {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: './img/project-hope.png',
        img2x: './img/project-hope-2x.png',
      },
      {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: './img/international-medical-corps.png',
        img2x: './img/international-medical-corps-2x.png',
      },
      {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: './img/razom.png',
        img2x: './img/razom-2x.png',
      },
      {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: './img/action-against-hunger.png',
        img2x: './img/action-against-hunger-2x.png',
      },
      {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: './img/charity-foundation-sergiy-prytula.png',
        img2x: './img/charity-foundation-sergiy-prytula-2x.png',
      },
      {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: './img/medecins-sans-frontieres.png',
        img2x: './img/medecins-sans-frontieres-2x.png',
      },
      {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: './img/world-vision.png',
        img2x: './img/world-vision-2x.png',
      },
      {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: './img/united24.png',
        img2x: './img/united24-2x.png',
      },
    ];

    const list = document.querySelector('.list');
    const toggleButton = document.getElementById('toggleButton');
    let areItemsVisible = true;
    
    function toggleItemsVisibility() {
        list.innerHTML = '';
      
        const startIndex = areItemsVisible ? 0 : 3;
        const endIndex = areItemsVisible ? 6 : 9;
      
        charities.slice(startIndex, endIndex).forEach((charity, index) => {
          const item = document.createElement('li');
          const link = document.createElement('a');
      
          const img = document.createElement('img');
          img.srcset = `${charity.img} 1x, ${charity.img2x} 2x`;
          img.src = charity.img;
          img.alt = charity.title;
          img.classList.add('white-image'); 
      
          link.href = charity.url;
      
          const paddedIndex = (startIndex + index + 1).toString().padStart(2, '0');
          item.textContent = `${paddedIndex} `;
      
          link.appendChild(img);
          item.appendChild(link);
      
          list.appendChild(item);
        });
      
        areItemsVisible = !areItemsVisible;
      }
    toggleButton.addEventListener('click', toggleItemsVisibility);
    
    toggleItemsVisibility();