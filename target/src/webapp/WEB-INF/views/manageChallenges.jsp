<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/WEB-INF/css/styles.css" />
    <title>Manage Challenges</title>
</head>
<body>
    <div class="container">
        <h1>Manage Challenges</h1>
        <form method="post" action="/manageChallenges">
            <label for="name">Challenge Name:</label>
            <input type="text" id="name" name="name" required />
            <button type="submit">Add Challenge</button>
        </form>
        <c:if test="${not empty message}">
            <p class="message">${message}</p>
        </c:if>
    </div>
</body>
</html>
