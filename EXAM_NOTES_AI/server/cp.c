#include <stdio.h>
#include <stdlib.h>

#define MAX 100


struct Node {
    int data;
    struct Node* next;
    struct Node* rep;  
};

struct Node* nodes[MAX];

int setSize[MAX];

void makeSet(int n) {
    for(int i = 0; i < n; i++) {
        struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
        temp->data = i;
        temp->next = NULL;
        temp->rep = temp;

        nodes[i] = temp;
        setSize[i] = 1;
    }
}

// FIND
struct Node* findSet(int x) {
    return nodes[x]->rep;
}

// UNION BY SIZE
void unionSet(int x, int y) {

    struct Node* repX = findSet(x);
    struct Node* repY = findSet(y);

    if(repX == repY)
        return;

    // Attach smaller list to larger list
    if(setSize[repX->data] < setSize[repY->data]) {
        struct Node* temp = repY;
        while(temp->next != NULL)
            temp = temp->next;

        temp->next = repX;

        // Update rep pointer for all nodes of X
        struct Node* curr = repX;
        while(curr != NULL) {
            curr->rep = repY;
            curr = curr->next;
        }

        setSize[repY->data] += setSize[repX->data];
    }
    else {
        struct Node* temp = repX;
        while(temp->next != NULL)
            temp = temp->next;

        temp->next = repY;

        // Update rep pointer for all nodes of Y
        struct Node* curr = repY;
        while(curr != NULL) {
            curr->rep = repX;
            curr = curr->next;
        }

        setSize[repX->data] += setSize[repY->data];
    }
}

// Print sets
void printSets(int n) {
    printf("\nSets:\n");
    for(int i = 0; i < n; i++) {
        if(nodes[i]->rep == nodes[i]) {
            struct Node* temp = nodes[i];
            while(temp != NULL) {
                printf("%d ", temp->data);
                temp = temp->next;
            }
            printf("\n");
        }
    }
}

// MAIN
int main() {

    int n, m;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    makeSet(n);

    printf("Enter number of unions: ");
    scanf("%d", &m);

    for(int i = 0; i < m; i++) {
        int x, y;
        printf("Enter pair (x y): ");
        scanf("%d %d", &x, &y);
        unionSet(x, y);
        printSets(n);
    }

    return 0;
}