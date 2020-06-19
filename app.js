const inputs = document.querySelectorAll('.controls input'); 

function handleUpdate(){

    // console.log(this);
    // console.log(this.value);
    // console.log(this.dataset)
    console.log(this.name);

    const suffix = this.dataset.sizing || ''; //either its going to have "px"(sizing) or nothing '' which is just going to fall back
    //  if we won't use  '' , it will append undefined
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    // this.name corresponds to "spacing" "blur" and "base"
    // --${this.name} corresponds to --spacing , --blur and --base
    //to use the element using it's name

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

