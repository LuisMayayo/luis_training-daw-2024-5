let currentId = 1;

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0];

    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = currentId;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = 'Example';
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = 'Surname';
    tr.appendChild(td);

    td = document.createElement('td');
    let editLink = document.createElement('a');
    editLink.href = `http://localhost/edit/${currentId}`;
    editLink.innerText = 'Edit';
    td.appendChild(editLink);
    tr.appendChild(td);

    tbody.appendChild(tr);
    
    currentId++;
    console.log('add');
}