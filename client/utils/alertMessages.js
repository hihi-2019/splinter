export let deleteAlertMessage = {
    title: 'Are you sure you want to delete this group?',
    text: "This will delete all members and transactions, you won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#37517e',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }
  
export let deleteConfirmMessage = {
    title:'Deleted!',
    text:'The group has been deleted.',
    icon:'success'
  }

  export let deleteTransactionMessage = {
    title: 'Are you sure you want to delete this Transaction?',
    text: "This will delete your transaction",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#37517e',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }

  export let deleteTransactionConfirmMessage = {
    title:'Deleted!',
    text:'The transaction has been deleted.',
    icon:'success'
  }

  export let settleGroupMessage = {
    title: 'Are you sure you want to settle the debt for this group?',
    text: "You won't be able to add or delete transactions after this.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#37517e',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, settle up!'
  }

  export let settleConfirmMessage = {
    title:'Settled!',
    text:'Now tell everyone to pay up!',
    icon:'success'
  }