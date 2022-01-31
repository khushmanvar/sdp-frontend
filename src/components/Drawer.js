import React from "react";

export default function Drawer() {
    return (
     <div>
        <div class="rounded-lg shadow bg-base-200 drawer h-screen">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" /> 
          <div class="flex flex-col items-center justify-center drawer-content">
            <label for="my-drawer" class="btn btn-primary drawer-button">Open</label>
          </div> 
          <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>
                <a>Menu Item</a>
              </li> 
              <li>
                <a>Menu Item</a>
              </li>
            </ul>
          </div>
        </div>
  
      </div>
    );
}