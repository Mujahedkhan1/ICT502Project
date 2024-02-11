document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById("orderForm");
    const orderTable = document.getElementById("orderTable").getElementsByTagName('tbody')[0];
    const searchInput = document.getElementById("searchInput");

    // Function to add new order to the table
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const orderId = document.getElementById("orderId").value;
        const customerId = document.getElementById("customerId").value;
        const orderDate = document.getElementById("orderDate").value;
        const productName = document.getElementById("productName").value;
        const quantity = document.getElementById("quantity").value;
        const totalPrice = document.getElementById("totalPrice").value;

        // Create a new table row
        const newRow = orderTable.insertRow();
        newRow.innerHTML = `
            <td>${orderId}</td>
            <td>${customerId}</td>
            <td>${orderDate}</td>
            <td>${productName}</td>
            <td>${quantity}</td>
            <td>${totalPrice}</td>
            <td><button onclick="editOrder(this)">Edit</button></td>
            <td><button onclick="deleteOrder(this)">Delete</button></td>
        `;

        // Clear the form fields after submission
        orderForm.reset();
    });

    // Function to search orders in the table
    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        const rows = orderTable.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            const rowData = rows[i].textContent.toLowerCase();
            if (rowData.includes(query)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });
});

function editOrder(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName("td");

    // Populate form fields with row data for editing
    document.getElementById("orderId").value = cells[0].textContent;
    document.getElementById("customerId").value = cells[1].textContent;
    document.getElementById("orderDate").value = cells[2].textContent;
    document.getElementById("productName").value = cells[3].textContent;
    document.getElementById("quantity").value = cells[4].textContent;
    document.getElementById("totalPrice").value = cells[5].textContent;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}

function deleteOrder(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
