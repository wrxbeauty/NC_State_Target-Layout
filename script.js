const cards = [
    {image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-FY23HOL?wid=515&hei=293&fit=crop', header: 'Xbox Series X', description: 'commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet', links: ['https://loremipsum.io/generator/?n=20&t=w']},
    {image:'https://target.scene7.com/is/image/Target/GUEST_bf3e274c-20ba-40b6-91d1-8611fee54b18', header:'Xbox Series S', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit.',links: ['https://loremipsum.io/generator/?n=20&t=w']},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_871d7854-c411-4b70-b864-40ad50980123', header: 'Element 65&quot; 4K UHD Roku TV', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit.', links: ['https://loremipsum.io/generator/?n=20&t=w']},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_eff14440-7e96-4715-bca6-33b5b75ee7af', header: 'Meta Quest 2 Resident Evil 4 Bundle - 128GB', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit.', links: ['https://loremipsum.io/generator/?n=20&t=w']}
]
    

for (let i = 0; i < cards.length; i++){
    console.log(cards[i].image);


    let cardDiv = document.createElement('div');
    
    let image = document.createElement('img');
    image.src = cards[i].image;
    cardDiv.append(image);

    let header = document.createElement('h2')
    header.textContent = cards[i].header;
    cardDiv.append(header);

    let description = document.createElement('p');
    description.textContent = cards[i].description;
    cardDiv.append(description);

    cardDiv.append();
    document.querySelector('.Top-Picks')
}