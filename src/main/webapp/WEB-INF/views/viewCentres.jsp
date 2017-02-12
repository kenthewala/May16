<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
    <title>Spring MVC Form Handling</title>
</head>
<body>

<h2>Submitted Student Information</h2>
   <table>
    <tr>
        <td>Name</td>
        <td>${centre.name}</td>
    </tr>
    <tr>
        <td>City</td>
        <td>${centre.city}</td>
    </tr>
    <tr>
        <td>ID</td>
        <td>${centre.id}</td>
    </tr>
</table>  
</body>
</html>