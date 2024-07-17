document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form') as HTMLFormElement;
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // フォームのデフォルト送信をキャンセル
  
      const userId = (document.getElementById('userId') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
  
      try {
        const isValid = await verifyCredentials(userId, password);
        if (isValid) {
          window.location.href = 'seats.html'; // 認証成功時のページ遷移
        } else {
          alert('IDまたはパスワードが正しくありません。'); // 認証失敗時のアラート
        }
      } catch (error) {
        console.error('ログイン処理中にエラーが発生しました:', error);
      }
    });
  
    async function verifyCredentials(userId: string, password: string): Promise<boolean> {
      // 本来はサーバーにリクエストを送り、認証を行います
      // 以下はダミーの実装です
      return userId === 'hogehoge' && password === 'asdf1234';
    }
  });
  