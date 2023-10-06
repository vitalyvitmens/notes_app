document.addEventListener('click', (event) => {
  const id = event.target.dataset.id

  if (event.target.dataset.type === 'remove') {
    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }

  if (event.target.dataset.type === 'edit') {
    const newTitle = prompt('Введите новое название')

    if (newTitle) {
      edit({ id, title: newTitle }).then(() => {
        // location.reload()
      })
    }
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

async function edit(newNote) {
  await fetch(`/${newNote.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
  })
}
