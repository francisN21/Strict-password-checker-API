# Strict password checker

Simple REST API for password checking.
Get request only. Works with axios and fetch.

``

Root URL: https://strict-password-checker-api.herokuapp.com/check/

# Example:

```javascript
fetch("https://strict-password-checker-api.herokuapp.com/check/test")
      .then(res => res.json())
      .then(data => console.log(data))
      or
axios.get("https://strict-password-checker-api.herokuapp.com/check/${test})
```

## response:
![](assets/test.png)

```javascript
fetch("https://strict-password-checker-api.herokuapp.com/check/TrustMeiAmaDecentPassword2134!!")
      .then(res => res.json())
      .then(data => console.log(data))
      or
axios.get("https://strict-password-checker-api.herokuapp.com/check/${TrustMeiAmaDecentPassword2134!!})
```

## response:
![](assets/test1.png)

## Password checker checks for:

<ul>
<li>lower case a-z</li>
<li>upper case a-z</li>
<li>Numbers 0-9</li>
<li>Special Chars: $@#&!</li>
<li>Password length greater than 8</li>
<li>Extra password strength score for 15 or more characters<li>
</ul>
