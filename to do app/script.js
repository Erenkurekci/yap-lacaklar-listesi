function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;
    
    let li = document.createElement("li");

    // Görev metni için bir span oluştur
    let span = document.createElement("span");
    span.textContent = taskText;

    // Düzenleme butonu oluştur
    let editButton = document.createElement("button");
    editButton.textContent = "Düzenle";
    editButton.className = "edit-btn";
    editButton.onclick = function() {
        editTask(span);
    };

    // Silme butonu oluştur
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        removeTask(li);
    };

    // Elemanları li içine ekle
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);
    
    // random 
    randomRenk();

    taskInput.value = "";
}

function editTask(span) {
    // Mevcut metni içeren bir input oluşturuyoruz
    let input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.className = "edit-input";
    
    // Span öğesinin yerine input'u yerleştiriyoruz
    span.parentNode.replaceChild(input, span);
    input.focus();

    // Düzenleme tamamlandığında (Enter tuşu veya input kaybolduğunda) metni güncelle
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            updateTask();
        }
    });
    
    input.addEventListener("blur", updateTask);
    
    function updateTask() {
        let newText = input.value.trim();
        // Eğer input boşsa eski metni koruyoruz, boş değilse güncelliyoruz
        let updatedText = newText !== "" ? newText : span.textContent;
        
        // Yeni bir span oluşturup metni güncelliyoruz
        let newSpan = document.createElement("span");
        newSpan.textContent = updatedText;
        
        // Yeni span'in, düzenleme işlemini tetikleyebilmesi için edit fonksiyonunu buton ile ilişkilendirirken,
        // mevcut li içerisindeki span'i değiştiriyoruz. (Daha önceden li içerisine eklenen edit butonuyla ilişkilendirilmişti.)
        input.parentNode.replaceChild(newSpan, input);
    }
}


// silme 
function removeTask(li) {
    li.remove();
}

// random arka plan
function randomRenk() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

  