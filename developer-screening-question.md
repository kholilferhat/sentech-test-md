# Basic Question

*Logic*
    - the uploaded photo is stored in db with "pending" status flag and the user can't change the status because they didnt have the authorization
    - the uploaded photo is shown on the reviewer dashboard and theres a button to patch the status from "pending" into "published" or "reject" or even provide a feedback to user
    - the user will get notification either their photo is approved or rejected

*technologies*
    - fe-framework: vue, nuxt, nextjs, etc.
    - be-framework: node, express.
    - bucket (photo): AWS S3, Google Cloud Storage, etc. 
    - DB: PG, MySql, MongoDb,
    - notification: firebase

*data structure*
    - id/_id: uuid
    - images: {
        desktop-url: string,
        mobile-url: string
    },
    - status: string,
    - created_at: date,
    - updated_at: date,
    - reviewer_id: uuid,
    - user_id: uuid

<br>

---

# Database Question

level 1.

```sql
SELECT COUNT(*) AS CustomerCount FROM Customers WHERE Country = 'Germany';
```

level 2.

```sql
SELECT Country,COUNT(*) AS TotalCustomer FROM Customers GROUP BY Country HAVING COUNT(*) >= 5 order by COUNT(*) DESC;
```

level 3.

```sql
SELECT Customers.CustomerName, COUNT(Orders.OrderID) AS OrderCount, MIN(Orders.OrderDate) AS FirstOrder, MAX(Orders.OrderDate) AS LastOrder FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID GROUP BY Customers.CustomerName HAVING COUNT(Orders.OrderID) >= 5 ORDER BY MAX(Orders.OrderDate) DESC;
```

<br>

---

# Javascript


level 1

```javascript
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("SHORT AND STOUT"));
```

level 2

```javascript
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}

// if tested in terminal
delay(3000).then(() => console.log('runs after 3 seconds'));

// if tested on browser
delay(3000).then(() => alert('runs after 3 seconds'));
```

level 2.5
```javascript
async function fetchData(url) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!url) {
        throw new Error("URL is required");
    }

    return `Data from ${url}`;
}


async function processData(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!data) {
        throw new Error("Data is required");
    }

    return data.toUpperCase();
}


(async () => {
    try {
        const data = await fetchData("https://example.com");
        console.log("Fetched Data:", data);

        const processedData = await processData(data);
        console.log("Processed Data:", processedData);
    } catch (err) {
        console.error("Error:", err.message);
    }
})();
```

level 3-4

- i've deployed on aws so you can access it from this:
    [Chat-App](http://54.251.167.55/)
- github repo fe [sentech-task-fe](https://github.com/kholilferhat/sentech-test-fe)
- github repo be [sentech-task-be](https://github.com/kholilferhat/sentech-test-be)

<br>

---

# Vue.js
1. Vue reactivity is like having a smart helper that keeps an eye on your data. For example is u have a v-model in your data and user make a change into that data, vue automatically update the data. For the common issue, based on my experience sometimes vue 2 is struggles to properly handle more complex data structure and when adding new properties to an object or directly modifying data indexes, vue might not detect these changes
2. Data flow between components is depending on their relationship like parent -> child, or child -> parent. for parent to child we can directly prop the data and declare the propped data on child. If the relationship is child to parent we had to emit the event from child into a parent. if the component is nested. so we had to nested the process. But if we use state management like pinia or vuex, we can use a single source of truth
3. Common causes of memory leaks in vue is usually because of the event listeners not removed like if you are using watch or adding global listeners like window.addEventListener and you dont clean them up when component is destroyed, they are keep running.
4. I've used Pinia for state management in vue
5. As fa as i know pre-rendering generates the html in advance at buildtime, while SSR generates the html dynamically on the server at request time. this means that the html on pre-rendering is static and remain the same until you rebuild the site, while the html on ssr is always refreshed every time user make a request into the server

<br>

# Website Security Best Practises
1. Use HTTPS instead of HTTP
    - https provide more secure connection by encrypting data between user browser and the server, preventing sensitive information like password and credit card detail from being intercepted
2. Validation
    - always use validation for any input to meet expected formats and prevent sql injection.
3. WAF
    - implement web application firewall like cloudflare or other to filter and monitor traffic, and prevent common attiacks like DDoS and sql injection
4. Secure Auth
    - always hash passwords using algorithms like bcrypt before storing into database
5. Security Audit
    - do security audit periodically to identify and address potential vulnerabilities. we can use pentest to simulate real-world attachs and assess system's defenses.

<br>


# Website Performance Best Practises

1. Optimize Images
    - based on my experience image could provide LCP that can reduce website performace. To handle that issue we can use image format that can reduce file size such as webp or avif
    - i usually separate the image for desktop and mobile screen so the loaded image can be more managable
2. Unnecessary JS function, css style, and sql query
    - keep the js, css, and query efficient also make significant impact into our web performance
3. Caching
    - implement caching such as redis or other caching provider also can make a good impact into web performace, so the fe doesnt have to make another request into be
4. lifecycle management
    - on modern web framework like vue or nextjs or other, theres lifecycle management which allows developers to hook into specific phases of a component or application lifecycle to execute code and make a good impact into web performance
5. pagination and lazy load
    - pagination and lazy load can make a good impact on web performace by reducing the amount of data fetched and rendered at once

<br>


# Go

```go
package main

import (
	"fmt"
	"regexp"
	"strings"
)

func countWordByBuiltIn(text string) map[string]int {
	text = strings.ToLower(text)
	re := regexp.MustCompile(`[^\w\s]`)
	text = re.ReplaceAllString(text, "")

	words := strings.Fields(text)

	frequency := make(map[string]int)
	for _, word := range words {
		frequency[word]++
	}

	return frequency
}

func main() {
	text := "Four, One two two three Three three four  four   four"
	frequency := countWordByBuiltIn(text)

	for word, count := range frequency {
		fmt.Printf("%s => %d\n", word, count)
	}
}
```
_disclaimer: i dont really use GO-Lang, this is my first-time using it, but i try my best to complete the task_

<br>

# Tools

1. Git -> 4
2. Redis -> 3
3. VSCode / JetBrains? -> 4.5
4. Linux? -> 3
5. AWS
    - EC2 -> 4
    - Lambda -> 0
    - RDS -> 0
    - Cloudwatch -> 0
    - S3 -> 5
6. Unit testing -> 3
7. Kanban boards? -> 4







