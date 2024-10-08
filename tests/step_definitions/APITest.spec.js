const { test, expect } = require('@playwright/test');

var userid;

test("Get Users",async({request})=>{
const response= await request.get("https://reqres.in/api/users?page=2");
console.log(await response.json());
expect(response.status()).toBe(200);

});
test("Create Users",async({request})=>{
const response=await request.post("https://reqres.in/api/users",
    {
        data:{"name":"Abhishek","job":"Automation Engineer" },
        headers:{"Accept":"application/json"}
    });
console.log(await response.json())
expect(response.status()).toBe(201);
var res=await  response.json()
userid=res.id;
})
test("Update Users",async({request})=>{
    const response=await request.put("https://reqres.in/api/users/"+userid,
        {
            data:{"name":"Abhishek","job":"Senior Automation Engineer" },
            headers:{"Accept":"application/json"}
        });
    console.log(await response.json())
    expect(response.status()).toBe(200);
    
})
test("delete Users",async({request})=>{
const response=await request.delete("https://reqres.in/api/users/"+userid);
expect(response.status()).toBe(204);

})