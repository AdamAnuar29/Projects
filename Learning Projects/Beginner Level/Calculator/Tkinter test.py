import tkinter as tk

root = tk.Tk()

root.title("My tkinter window!")
root.geometry("300x300")

#label = tk.Label(root, text="Hello, Tkinter!")
#label.pack()

#entry = tk.Entry(root) #text box
#entry.pack()

#button = tk.Button(root, text="Click Me", command=lambda: print("Button Clicked!"))
#button.pack()

#----------- Layout ------

"""for i in range(3):
    for j in range(3):
        button = tk.Button(root, text=f"Button {i}, {j}")
        button.grid(row=i, column=j)
"""
#----------- Handling Events----

"""def on_button_click():
    print("Button Clicked!")

button = tk.Button(root, text="Click Me", command=on_button_click)
button.pack()"""

#--------Variables----------
'''def change_text():
    text_var.set(entry.get())

text_var = tk.StringVar()

label = tk.Label(root, textvariable=text_var)
label.pack()



entry = tk.Entry(root)
entry.pack()

button = tk.Button(root, text="Change Text", command=change_text)
button.pack()'''

#----------Message Boxes and Dialogs
from tkinter import messagebox

def show_message():
    messagebox.showinfo("Info", "This is a message box!")

button = tk.Button(root, text="Show Message", command=show_message)
button.pack()


root.mainloop()