/**
* see https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
*/

$(document).ready(function(){

   if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}else{

    const recipeData = [
  { recipeId: "1", name: "Meatballs Arabiatta" },
  { recipeId: "2", name: "Chili Con Carne" }
];
    
    
    var request = window.indexedDB.open('groceryManagerDB');
    
    request.onError = function(event){
    
        alert("Database error: " + event.target.errorCode);
        
    }
    
    request.onSuccess = function(event){
        
        db.event.target.result;
        
    }
      
    
    
    
    // This event is only implemented in recent browsers
request.onupgradeneeded = function(event) { 
  var db = event.target.result;

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("recipes", { keyPath: "recipeId" });
    
  objectStore.createIndex("name", "name", { unique: false });

    objectStore.transaction.oncomplete = function(event) {

    
// Store values in the newly created objectStore.
    var recipeObjectStore = db.transaction("recipes", "readwrite").objectStore("recipes");
    for (var i in recipeData) {
      recipeObjectStore.add(recipeData[i]);
    }

    
    
};

    
    
}    
    
    
}
    
    
});