#include <iostream>
#include <iomanip>
#include <cstring>
using namespace std;

#define sw std::setw
#define lft std::left

struct NhanVien {
    char hoDem[20];
    char ten[15];
    char gioiTinh[5];
    char maNV[10];
    float heSoLuong;
};

struct Node {
    NhanVien nv;
    Node* next;

    Node() : next(NULL) {}
};

typedef Node* List;

void createList(List& l) {
    l = NULL;
}

bool isEmpty(List& l) {
    return l == NULL;
}

NhanVien inputNhanVien() {
    NhanVien nv;
    cout << "Nhap thong tin nhan vien:\n";
    cout << "Ma NV: ";
    cin.getline(nv.maNV, 10);

    cout << "Ho dem: ";
    cin.getline(nv.hoDem, 20);

    cout << "Ten: ";
    cin.getline(nv.ten, 15);

    cout << "Gioi tinh: ";
    cin.getline(nv.gioiTinh, 5);

    cout << "He so luong: ";
    cin >> nv.heSoLuong;
    cin.ignore(); // Xóa ký tự xuống dòng trong buffer
    return nv;
}

void printHeader() {
    cout << lft << sw(10) << "Ma NV" 
         << sw(20) << "Ho dem" 
         << sw(15) << "Ten" 
         << sw(10) << "Gioi tinh" 
         << sw(10) << "He so luong" 
         << endl;
}

void printNhanVien(const NhanVien& nv) {
    cout << lft << sw(10) << nv.maNV 
         << sw(20) << nv.hoDem 
         << sw(15) << nv.ten 
         << sw(10) << nv.gioiTinh 
         << sw(10) << nv.heSoLuong 
         << endl;
}

//chèn đầu
void insertNhanVien(List& l, const NhanVien& nv) {
    Node* newNode = new Node;
    newNode->nv = nv;
    newNode->next = l;
    l = newNode;
}
// chèn bất kỳ
void insertAtSecondPosition(List& l, const NhanVien& nv) {
    Node* newNode = new Node;
    newNode->nv = nv;

    if (isEmpty(l)) {
        // Nếu danh sách rỗng, thêm node mới như phần tử đầu tiên
        l = newNode;
    } else if (l->next == NULL) {
        // Nếu danh sách chỉ có một phần tử, chèn vào vị trí thứ 2
        l->next = newNode;
    } else {
        // Chèn vào vị trí thứ 2
        newNode->next = l->next;
        l->next = newNode;
    }
}
//chèn cuối
void addNhanVien(List& l, const NhanVien& nv) {
    Node* newNode = new Node;
    newNode->nv = nv;

    if (isEmpty(l)) {
        l = newNode;
    } else {
        Node* current = l;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
    }
}

// Xóa
void deleteNhanVien(List& l, const char* maNV) {
    Node* current = l;
    Node* previous = NULL;

    while (current != NULL) {
        if (strcmp(current->nv.maNV, maNV) == 0) {
            if (previous == NULL) {
                l = current->next; // Xóa node đầu
            } else {
                previous->next = current->next; // Xóa node giữa hoặc cuối
            }
            delete current;
            cout << "Da xoa nhan vien co ma: " << maNV << endl;
            return;
        }
        previous = current;
        current = current->next;
    }
    cout << "Khong tim thay nhan vien de xoa voi ma: " << maNV << endl;
}

// hiển thị danh sách nhân viên
void displayList(List& l) {
    printHeader();
    Node* current = l;
    while (current != NULL) {
        printNhanVien(current->nv);
        current = current->next;
    }
}

// tìm kiếm nhân viên
Node* searchNhanVien(List& l, const char* maNV) {
    Node* current = l;
    while (current != NULL) {
        if (strcmp(current->nv.maNV, maNV) == 0) {
            return current;
        }
        current = current->next;
    }
    return NULL; // Không tìm thấy
}

// tìm kiếm nhân viên bằng mã
void findNhanVienAtPosition(List& l, int position) {
    int index = 1;
    Node* current = l;

    while (current != NULL) {
        if (index == position) {
            cout << "Thong tin nhan vien o vi tri thu " << position << ":\n";
            printNhanVien(current->nv);
            return;
        }
        index++;
        current = current->next;
    }

    cout << "Khong co nhan vien o vi tri thu " << position << "!\n";
}




void sortList(List& l) {
    for (Node* i = l; i != NULL; i = i->next) {
        for (Node* j = i->next; j != NULL; j = j->next) {
            if (j->nv.heSoLuong < i->nv.heSoLuong) {
                NhanVien tmp = i->nv;
                i->nv= j->nv;
                j->nv = tmp;
            }
        }
    }
}

void sortList2(List& l) {
    if (l == NULL || l->next == NULL) {
        return; // Danh sách rỗng hoặc chỉ có 1 phần tử, không cần sắp xếp
    }

    Node* r = l;
    while (r->next != NULL) {
        Node* m = r;
        Node* q = r->next;

        while (q != NULL) {
            if (m->nv.heSoLuong > q->nv.heSoLuong) { //theo ten: strcmp(q->nv.ten, m->nv.ten)
                m = q;
            }
            q = q->next;
        }

        // Hoán đổi thông tin nhân viên giữa node r và m
        if (m != r) {
            NhanVien temp = r->nv;
            r->nv = m->nv;
            m->nv = temp;
        }
        r = r->next;
    }
}

int main() {
    List lst;
    createList(lst);

    cout << "Nhap vao danh sach it nhat 3 nhan vien:\n";
    for (int i = 0; i < 3; i++) {
        addNhanVien(lst, inputNhanVien());
    }

    while (true) {
        cout << "Nhap tiep? (1: tiep tuc, 2: dung): ";
        int choice;
        cin >> choice;
        cin.ignore(); // Xóa ký tự xuống dòng trong buffer

        if (choice == 1) {
            addNhanVien(lst, inputNhanVien());
        } else if (choice == 2) {
            break;
        } else {
            cout << "Lua chon khong hop le!\n";
        }
    }

    cout << "\nDanh sach nhan vien:\n";
    displayList(lst);

    cout << "\nTim nhan vien theo ma:\n";
    cout << "Nhap ma NV can tim: ";
    char maTim[10];
    cin.getline(maTim, 10);

    Node* found = searchNhanVien(lst, maTim);
    if (found != NULL) {
        cout << "Thong tin nhan vien tim thay:\n";
        printNhanVien(found->nv);
    } else {
        cout << "Khong tim thay nhan vien voi ma: " << maTim << endl;
    }

    cout << "\nXoa nhan vien theo ma:\n";
    cout << "Nhap ma NV can xoa: ";
    cin.getline(maTim, 10);
    deleteNhanVien(lst, maTim);

    cout << "\nDanh sach sau khi xoa:\n";
    displayList(lst);

    cout << "\nNhan vien o vi tri thu 3:\n";
    findNhanVienAtPosition(lst, 3);

    cout << "\nChen nhan vien moi vao dau danh sach:\n";
    insertNhanVien(lst, inputNhanVien());
    
    cout << "\nDanh sach sau khi chen la:\n";
    displayList(lst);

    cout << "\nDanh sach sau khi sap xep theo he so luong tang dan:\n";
    sortList2(lst);
    displayList(lst);

    return 0;
}
